import React from 'react';
import {
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import { cilLanguage, cilLockLocked } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import changeLanguage from 'src/i18n/changeLanguage';
import i18n from 'src/i18n';

function Languagei18n() {
  const currentLang = i18n.language; // Get the current language

  const change = (newLang) => {
    try {
      changeLanguage(newLang);
      window.location.reload();
    } catch (error) {
      alert('changeLanguage error');
    }
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        {i18n.t('languageTitle')} ({currentLang.toUpperCase()}){' '}
        <CIcon icon={cilLanguage} className="me-2" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">
          {i18n.t('changeLanguageSubTitle')}
        </CDropdownHeader>
        <CDropdownItem onClick={() => change('fr')}>
          <CIcon icon={cilLockLocked} className="me-2" />
          {i18n.t('frenchLanguage')}
        </CDropdownItem>
        <CDropdownItem onClick={() => change('en')}>
          <CIcon icon={cilLockLocked} className="me-2" />
          {i18n.t('englishLanguage')}
        </CDropdownItem>
        <CDropdownItem onClick={() => change('ar')}>
          <CIcon icon={cilLockLocked} className="me-2" />
          {i18n.t('arabicLanguage')}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
}

export default Languagei18n;
