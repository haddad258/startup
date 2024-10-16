import React from 'react';

import PropTypes from 'prop-types';
import { API_URLPublic } from 'src/services/Api/config';


const ImagesDetailsC = ({  selectedImagesConfigs, type }) => {


    return (
        <>


              
            <img
                style={{
                    width: "20%",
                    height: "20%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                src={API_URLPublic +type+"/"+ selectedImagesConfigs?.images}
                alt="preview"
            />

        </>
    );
};

ImagesDetailsC.propTypes = {
    selectedImagesConfigs: PropTypes.object,
    type: PropTypes.string,
};

export default ImagesDetailsC;
