import cloudy from './img/cloudy.svg';
import cloudy_sun from './img/cloudy-sun.svg';
import rainy from './img/rainy.svg';
import snowy from './img/snowy.svg';
import storm from './img/storm.svg';
import sun from './img/sun.svg';
import thunder from './img/thunder.svg';
import windy from './img/windy.svg';

const table = {
    200: storm,
    201: storm,
    202: thunder,
    210: thunder,
    211: thunder,
    212: thunder,
    221: thunder,
    230: storm,
    231: storm,
    232: thunder,

    300: rainy,
    301: rainy,
    302: rainy,
    310: rainy,
    311: rainy,
    312: rainy,
    313: rainy,
    314: rainy,
    321: rainy,

    500: rainy,
    501: rainy,
    502: rainy,
    504: rainy,
    511: rainy,
    520: rainy,
    521: rainy,
    522: rainy,
    531: rainy,

    600: snowy,
    601: snowy,
    602: snowy,
    611: snowy,
    612: snowy,
    613: snowy,
    614: snowy,
    615: snowy,
    616: snowy,
    620: snowy,
    621: snowy,
    622: snowy,

    701: windy,
    711: windy,
    721: windy,
    731: windy,
    741: windy,
    751: windy,
    761: windy,
    762: windy,
    771: windy,
    781: windy,

    800: sun,
    801: cloudy_sun,
    802: cloudy_sun,
    803: cloudy,
    804: cloudy,

}

export default table;