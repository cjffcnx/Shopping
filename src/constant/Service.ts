import { FaTshirt, FaFemale, FaMale, FaChild } from "react-icons/fa";

export const Services = [
    {
        id: 1,
        icon: FaTshirt,
        title: "Casual Wear",
        description: [
            "Trendy t-shirts & tops",
            "Comfortable everyday wear",
            "Premium cotton fabric",
            "Multiple colors available"
        ],
        price: "Rs. 999",
        duration: " onwards"

        // Euta array[] bhitra object {} cha object bhitra pani hamro data cha ni tah 
    },
    {
        id: 2,
        icon: FaFemale,
        title: "Women's Collection",
        description: [
            "Elegant dresses & kurtis",
            "Traditional & western wear",
            "Party & office outfits",
            "Accessories included"
        ],
        price: "Rs. 1499",
        duration: " onwards"
    },
    {
        id: 3,
        icon: FaMale,
        title: "Men's Collection",
        description: [
            "Formal shirts & pants",
            "Casual & sporty styles",
            "Premium quality fabric",
            "All sizes available"
        ],
        price: "Rs. 1299",
        duration: " onwards"
    },
    {
        id: 4,
        icon: FaChild,
        title: "Kids Collection",
        description: [
            "Cute & comfortable designs",
            "School & party wear",
            "Soft & safe materials",
            "Age 2-14 years"
        ],
        price: "Rs. 699",
        duration: " onwards"
    },
];