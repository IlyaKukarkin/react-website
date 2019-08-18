import site1 from 'Data/images/site1.jpg';
import site2 from 'Data/images/site2.jpg';
import site3 from 'Data/images/site3.jpg';
import news1 from 'Data/images/news1.jpg';
import news2 from 'Data/images/news2.jpg';
import computer from 'Data/icons/computer.png';
import networking2 from 'Data/icons/networking2.png';
import settings from 'Data/icons/settings.png';
import networking from 'Data/icons/networking.png';
import laptop from 'Data/icons/laptop.png';
import startup from 'Data/icons/startup.png';

const getImage = imageName => {
    switch (imageName) {
        case "site1":
            return site1;
        case "site2":
            return site2;
        case "site3":
            return site3;
        case "news1":
            return news1;
        case "news2":
            return news2;
        case "computer":
            return computer;
        case "networking2":
            return networking2;
        case "settings":
            return settings;
        case "networking":
            return networking;
        case "laptop":
            return laptop;
        case "startup":
            return startup;
        default:
            return site3;
    }
}

export default getImage;