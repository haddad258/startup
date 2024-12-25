
  import React, { useEffect, useState } from 'react';
  import {
      CRow,
      CCol,
      CCard,
      CCardHeader,
      CCardBody,
  } from '@coreui/react';
  import { settingsPublications } from 'src/services/SupperSettings/index';
  import GenericTable from 'src/components/Generic.Table';
  import PublicationsC from './Publications'
  import i18n from 'src/i18n';
import StatusRow from 'src/components/module.common/status.row';
import ImagesDetailsC from 'src/components/Images/Images.Details';
import ImagesConfigsC from 'src/components/Images/add.image.Folder';
const Publications = () => {
      const [List, setList] = useState([]);
  
      const fetchPublications = async () => {
          try {
              const list = await settingsPublications.getPublications();
              if (list) {
                  setList(list?.data);
              }
          } catch (error) {
              console.error('Error fetching admin list:', error);
          }
      };
      useEffect(() => {
          fetchPublications();
      }, []);
  
      const columns = [
          //{ label: '#', field: 'index' },
          { label: i18n.t('contentInputLabel'), field: 'content' },
          { label: i18n.t('hashtagInputLabel'), field: 'hashtag' },
          { label: i18n.t('imageUrlInputLabel'), field: 'appreciation' },
          
          {
              label:  i18n.t('actionLabel'),
              field: 'actions',
              render: (item) =>
              (
                <>
                <PublicationsC refresh={()=>fetchPublications()} selectedPublications={item} />
                    <ImagesConfigsC refresh={() => fetchPublications()} selectedImagesConfigs={item} type={"articles"} />
                    <StatusRow refresh={() => fetchPublications()} status={item.status} data={"publications"} entityName={i18n.t('PaymentCardsList')} id={item.id} />
                </>
              )
          },
          {
            label: i18n.t('Images'),
            field: 'actions',
            render: (item) =>
                <>
                    <ImagesDetailsC refresh={() => fetchPublications()} selectedImagesConfigs={item} type={"publications"} />
                </>
        },
      ];
  
      return (
          <CCard className="mb-4">
              <CCardHeader>
                  <CRow className="align-items-center">
                      <CCol md="6" xs="12">
                          <strong>   { i18n.t('PublicationsTableTitle')}</strong>
                      </CCol>
                      <CCol md="6" xs="12" className="text-md-end mt-md-0 mt-3">
                          <PublicationsC refresh={()=>fetchPublications()} />
                      </CCol>
                  </CRow>
              </CCardHeader>
              <CCardBody>
                  <CRow>
                      <CCol xs="12">
                          <CCard className="mb-4">
                              <CCardHeader>
                          <strong>{ i18n.t('PublicationsList')}</strong>
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
  
  export default Publications;
  
  