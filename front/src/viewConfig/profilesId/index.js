
  import React, { useEffect, useState } from 'react';
  import {
      CRow,
      CCol,
      CCard,
      CCardHeader,
      CCardBody,
  } from '@coreui/react';
  import { settingsProfilesIds } from 'src/services/SupperSettings/index';
  import GenericTable from 'src/components/Generic.Table';
  import ProfilesIdsC from './profilesId'
  import i18n from 'src/i18n';
  const ProfilesIds = () => {
      const [List, setList] = useState([]);
  
      const fetchProfilesIds = async () => {
          try {
              const list = await settingsProfilesIds.getProfilesIds();
              if (list) {
                  setList(list?.data);
              }
          } catch (error) {
              console.error('Error fetching admin list:', error);
          }
      };
      useEffect(() => {
          fetchProfilesIds();
      }, []);
  
      const columns = [
          { label: '#', field: 'index' },
          { label: i18n.t('nameInputLabel'), field: 'name' },
          { label: i18n.t('descriptionInputLabel'), field: 'description' },
          { label: i18n.t('appreciationInputLabel'), field: 'appreciation' },
          
          {
              label:  i18n.t('actionLabel'),
              field: 'actions',
              render: (item) => <ProfilesIdsC refresh={()=>fetchProfilesIds()} selectedProfilesIds={item} />,
          },
      ];
  
      return (
          <CCard className="mb-4">
              <CCardHeader>
                  <CRow className="align-items-center">
                      <CCol md="6" xs="12">
                          <strong>   { i18n.t('ProfilesIdsTableTitle')}</strong>
                      </CCol>
                      <CCol md="6" xs="12" className="text-md-end mt-md-0 mt-3">
                          <ProfilesIdsC refresh={()=>fetchProfilesIds()} />
                      </CCol>
                  </CRow>
              </CCardHeader>
              <CCardBody>
                  <CRow>
                      <CCol xs="12">
                          <CCard className="mb-4">
                              <CCardHeader>
                          <strong>{ i18n.t('ProfilesIdsList')}</strong>
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
  
  export default ProfilesIds;
  
  