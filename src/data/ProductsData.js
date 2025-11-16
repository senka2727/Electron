import Preview1 from '../../assets/ProductPhotos/GamingDevices/g102.jpg';
import Preview2 from '../../assets/ProductPhotos/GamingDevices/DeathAdderE.jpg';
import Preview3 from '../../assets/ProductPhotos/GamingDevices/Rival3Wireless.jpg';
import Preview4 from '../../assets/ProductPhotos/GamingDevices/RedragonKumara.png';
import Preview5 from '../../assets/ProductPhotos/GamingDevices/Cloud2.jpg';
import Preview6 from '../../assets/ProductPhotos/GamingDevices/HS55.jpg';
import Preview7 from '../../assets/ProductPhotos/PCComponents/5600x.jpg';
import Preview8 from '../../assets/ProductPhotos/PCComponents/i712700k.jpg';
import Preview9 from '../../assets/ProductPhotos/PCComponents/4070ti.jpg';
import Preview10 from '../../assets/ProductPhotos/PCComponents/b550-plus.jpg';
import Preview11 from '../../assets/ProductPhotos/PCComponents/Vengance32gb.webp';
import Preview12 from '../../assets/ProductPhotos/PCComponents/rx7900xt.jpg';
import Preview13 from '../../assets/ProductPhotos/PCComponents/Sn850x.jpg';
import Preview14 from '../../assets/ProductPhotos/PCComponents/Hyper212.jpg';
import Preview15 from '../../assets/ProductPhotos/PCComponents/MAGB760.jpg';
import Preview16 from '../../assets/ProductPhotos/PCComponents/FocusGX750.jpg';

const ProductsData = [
    {
        id: 0,
        Price: 89,
        CompanyName: "Logitech",
        ProductName: "G102 Lightsync",
        Rating: "4.9",
        ReviewsCount: 10432,
        Image: Preview1,
        Category: "Gaming Devices",
        Tags: ["mouse", "gaming mouse", "lightsync", "budget", "logitech"]
    },
    {
        id: 1,
        Price: 129,
        OldPrice: 149,
        CompanyName: "Razer",
        ProductName: "DeathAdder Essential",
        Rating: "4.7",
        ReviewsCount: 8231,
        Image: Preview2,
        Category: "Gaming Devices",
        Tags: ["mouse", "gaming mouse", "deathadder", "ergonomic", "razer", "gaming"]
    },
    {
        id: 2,
        Price: 199,
        CompanyName: "SteelSeries",
        ProductName: "Rival 3 Wireless",
        Rating: "4.8",
        ReviewsCount: 5320,
        Image: Preview3,
        Category: "Gaming Devices",
        Tags: ["mouse", "gaming mouse", "wireless", "rival", "steelseries", "gaming"]
    },
    {
        id: 3,
        Price: 59,
        OldPrice: 79,
        CompanyName: "Redragon",
        ProductName: "K552 Kumara",
        Rating: "4.6",
        ReviewsCount: 6401,
        Image: Preview4,
        Category: "Gaming Devices",
        Tags: ["keyboard", "mechanical", "redragon", "kumara", "gaming"]
    },
    {
        id: 4,
        Price: 249,
        CompanyName: "HyperX",
        ProductName: "Cloud II",
        Rating: "4.9",
        ReviewsCount: 11245,
        Image: Preview5,
        Category: "Gaming Devices",
        Tags: ["headset", "cloud2", "hyperx", "gaming audio", "surround"]
    },
    {
        id: 5,
        Price: 119,
        OldPrice: 139,
        CompanyName: "Corsair",
        ProductName: "HS55 Surround",
        Rating: "4.7",
        ReviewsCount: 3850,
        Image: Preview6,
        Category: "Gaming Devices",
        Tags: ["headset", "surround", "corsair", "gaming audio", "comfortable"]
    },
    {
        id: 6,
        Price: 299,
        CompanyName: "AMD",
        ProductName: "Ryzen 5 5600X",
        Rating: "4.9",
        ReviewsCount: 15820,
        Image: Preview7,
        Category: "PC Components",
        Tags: ["cpu", "ryzen", "5600x", "gaming cpu", "amd"]
    },
    {
        id: 7,
        Price: 429,
        OldPrice: 499,
        CompanyName: "Intel",
        ProductName: "Core i7-12700K",
        Rating: "4.8",
        ReviewsCount: 10214,
        Image: Preview8,
        Category: "PC Components",
        Tags: ["cpu", "i7", "intel", "12700k", "high performance"]
    },
    {
        id: 8,
        Price: 1199,
        CompanyName: "NVIDIA",
        ProductName: "GeForce RTX 4070 Ti",
        Rating: "4.9",
        ReviewsCount: 8340,
        Image: Preview9,
        Category: "PC Components",
        Tags: ["gpu", "4070ti", "rtx", "nvidia", "high-end"]
    },
    {
        id: 9,
        Price: 289,
        OldPrice: 319,
        CompanyName: "ASUS",
        ProductName: "TUF Gaming B550-PLUS",
        Rating: "4.7",
        ReviewsCount: 4911,
        Image: Preview10,
        Category: "PC Components",
        Tags: ["motherboard", "b550", "asus", "tuf", "amd build"]
    },
    {
        id: 10,
        Price: 169,
        CompanyName: "Corsair",
        ProductName: "Vengeance RGB Pro 32GB DDR4",
        Rating: "4.8",
        ReviewsCount: 9230,
        Image: Preview11,
        Category: "PC Components",
        Tags: ["ram", "ddr4", "corsair", "rgb", "32gb"]
    },
    {
        id: 11,
        Price: 949,
        CompanyName: "AMD",
        ProductName: "Radeon RX 7900 XT",
        Rating: "4.8",
        ReviewsCount: 6120,
        Image: Preview12,
        Category: "PC Components",
        Tags: ["gpu", "7900xt", "radeon", "amd", "high-end"]
    },
    {
        id: 12,
        Price: 139,
        OldPrice: 159,
        CompanyName: "Western Digital",
        ProductName: "SN850X 1TB NVMe SSD",
        Rating: "4.9",
        ReviewsCount: 7854,
        Image: Preview13,
        Category: "PC Components",
        Tags: ["ssd", "nvme", "sn850x", "1tb", "fast storage"]
    },
    {
        id: 13,
        Price: 129,
        CompanyName: "Cooler Master",
        ProductName: "Hyper 212 Black Edition",
        Rating: "4.6",
        ReviewsCount: 5340,
        Image: Preview14,
        Category: "PC Components",
        Tags: ["cooler", "air cooling", "hyper212", "cooler master", "cpu cooler"]
    },
    {
        id: 14,
        Price: 249,
        OldPrice: 279,
        CompanyName: "MSI",
        ProductName: "MAG B760 Tomahawk WiFi DDR5",
        Rating: "4.8",
        ReviewsCount: 4578,
        Image: Preview15,
        Category: "PC Components",
        Tags: ["motherboard", "b760", "msi", "ddr5", "intel build"]
    },
    {
        id: 15,
        Price: 119,
        CompanyName: "Seasonic",
        ProductName: "Focus GX-750 80+ Gold PSU",
        Rating: "4.9",
        ReviewsCount: 3487,
        Image: Preview16,
        Category: "PC Components",
        Tags: ["psu", "750w", "80+ gold", "seasonic", "power supply"]
    },
];

export default ProductsData;
