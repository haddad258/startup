import api from '../../Api/api';
import { Apis } from '../../Api/config';
const getSuppliers = async () => {
    try {
        const result = await api.get(Apis.API_Suppliers );
        return result.data.error ? null : result.data;
    } catch (error) {
        
        return null;
    }
};


const SuppliersFun = {
    getSuppliers,
};

export default SuppliersFun;


