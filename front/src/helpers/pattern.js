export function getPatternByKey (key)  {
        switch (key) {
            case 'lpa_esim':
                return /^[A-Za-z0-9]{16,}$/; // Alphanumeric, minimum 16 characters
            case 'iccid':
                return /^\d{19,20}$/; // Numeric, 19-20 digits
            case 'imsi':
                return /^\d{15}$/; // Numeric, exactly 15 digits
            case 'mnc':
                return /^\d{2,3}$/; // Numeric, 2-3 digits
            case 'mcc':
                return /^\d{3}$/; // Numeric, exactly 3 digits
            case 'number':
                return /^\+?\d{10,15}$/; // Phone number, optional "+" with 10-15 digits
            case 'ki':
                return /^[A-Fa-f0-9]{32}$/; // Hexadecimal, 32 characters
            case 'brand':
            case 'operator':
            case 'countryCode':
                return /^[A-Za-z\s]{2,}$/; // Letters and spaces, at least 2 characters
            case 'description':
                return /^.{0,255}$/; // Any text, maximum 255 characters
            case 'status':
                return /^[01]$/; // Binary: "0" or "1"
            case 'activeDate':
                return /^\d{4}-\d{2}-\d{2}$/; // Date in YYYY-MM-DD format
            default:
                return /^.*$/; // Default pattern: any value
        }
    };
    