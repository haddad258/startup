
  import React, { useEffect, useState } from 'react';
  import {
      CRow,
      CCol,
      CCard,
      CCardHeader,
      CCardBody,
  } from '@coreui/react';
  import { settingsConfigApps } from 'src/services/SupperSettings/index';
  import GenericTable from 'src/components/Generic.Table';
  import AdvertisementsC from './Advertisements'
  import i18n from 'src/i18n';
  import ImagesDetailsC from 'src/components/Images/Images.Details';
import ImagesConfigsC from 'src/components/Images/add.image.Folder';
  const Advertisements = () => {
      const [List, setList] = useState([]);
  
      const fetchAdvertisements = async () => {
          try {
              const list = await settingsConfigApps.getConfigApps("entity/advertisements");
              if (list) {
                  setList(list?.data);
              }
          } catch (error) {
              console.error('Error fetching admin list:', error);
          }
      };
      useEffect(() => {
          fetchAdvertisements();
      }, []);
  
      const columns = [
          //{ label: '#', field: 'index' },
          { label: i18n.t('nameInputLabel'), field: 'name' },
          { label: i18n.t('contentInputLabel'), field: 'content' },
          { label: i18n.t('typeInputLabel'), field: 'type' },
          
          
          {
              label:  i18n.t('actionLabel'),
              field: 'actions',
              render: (item) =>
                
                (
                <>
                   <AdvertisementsC refresh={()=>fetchAdvertisements()} selectedAdvertisements={item} />
                <ImagesConfigsC refresh={() => fetchAdvertisements()} selectedImagesConfigs={item} type={"advertisements"} />
               </>
              )
            },
            {
                label: i18n.t('Images'),
                field: 'actions',
                render: (item) =>
                    <>
                        <ImagesDetailsC refresh={() => fetchAdvertisements()} selectedImagesConfigs={item} type={"advertisements"} />
                    </>
            },
      ];
  
      return (
          <CCard className="mb-4">
              <CCardHeader>
                  <CRow className="align-items-center">
                      <CCol md="6" xs="12">
                          <strong>   { i18n.t('AdvertisementsTableTitle')}</strong>
                      </CCol>
                      <CCol md="6" xs="12" className="text-md-end mt-md-0 mt-3">
                          <AdvertisementsC refresh={()=>fetchAdvertisements()} />
                      </CCol>
                  </CRow>
              </CCardHeader>
              <CCardBody>
                  <CRow>
                      <CCol xs="12">
                          <CCard className="mb-4">
                              <CCardHeader>
                          <strong>{ i18n.t('AdvertisementsList')}</strong>
                              </CCardHeader>
                              <CCardBody>
                                      <GenericTable columns={columns} data={List} />
                              </CCardBody>
                          </CCard>
                      </CCol>
                  </CRow>
              </CCardBody>
          </CCard>
      );
  };
  
  export default Advertisements;
  
  