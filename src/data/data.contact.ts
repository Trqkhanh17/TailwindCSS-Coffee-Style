import contactImg1 from "../assets/contactImg1.jpg";
import contactImg2 from "../assets/contactImg2.jpg";
export interface officeWrapItem {
        img: string,
        label1: string,
        label2: string,
        label3: {
            label3_1: string,
            label3_2: string,
            label3_3: string,
        },
        label4: string,
        time: {
            time1: string,
            time2: string,
            time3: string,
        }
    }
export interface departmentsItem {
        label: string,
        name: string,
        phone: string,
        email: string
    }
export interface dataForm {
        name: string;
        email: string;
        message: string;
    }
export const officeWrap: officeWrapItem[] = [
        {
            img: contactImg1,
            label1: "United Kingdom",
            label2: "Canary Wharf, London",
            label3: {
                label3_1: "Jubilee Place",
                label3_2: "London",
                label3_3: "E14 5NY",
            },
            label4: "Opening Times",
            time: {
                time1: "Mon - Fri 08:00 to 22:00",
                time2: "Sat - 09:00 to 20:00",
                time3: "Sun - 12:00 to 18:00"
            }
        },
        {
            img: contactImg2,
            label1: "United States",
            label2: "Venice Beach, California",
            label3: {
                label3_1: "9219 Old Kingston Street South",
                label3_2: "El Monte, CA",
                label3_3: "91733",
            },
            label4: "Opening Times",
            time: {
                time1: "Mon - Wed 09:00 to 21:00",
                time2: "Thu - Sat 09:00 to 22:00",
                time3: "Sun - 10:00 to 19:00"
            }
        }
    ]

export const departments: departmentsItem[] = [
        {
            label: "Press",
            name: "Robb Kohler",
            phone: "086-374-4962",
            email: "robb.kohler@coffeestyle.com"
        },
        {
            label: "Management",
            name: "Roob Dayana",
            phone: "354-341-2750",
            email: "roob.dayana@coffeestyle.com"
        },
        {
            label: "Support",
            name: "Warren Marsh",
            phone: "531-403-0376",
            email: "warren.marsh@coffeestyle.com"
        }
    ]