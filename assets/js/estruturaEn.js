$(document).ready(function () {

    var language = {
        navbar: {
            abouts: "About Us",
            events: "Events",
            teams: "Teams",
            board: "Management",
            partners: "Our Partners",
            contacts: "Contacts",
            language: "PT",
            pageLanguage: "index.html"
        },
        abouts: {
            text01: "BEST is a non-profit and apolitical European "+
                    "organization of science, engineering and technology students, 97 universities in 34 countries with "+
                    "approximately 3000 members and covering approximately 1 million students.",
            text02: "BEST Aveiro is one of the 97 local groups "+
                    "of BEST, a European organization of students of Sciences, Engineering and Technology who work cooperatively to "+
                    "provide various services that the organization offers.",
            btn: "Read More",
            btn2: "Read More"
        },
        events: {
            title: "Events",
            textEbec: "Meet the biggest engineering <br> competition in Europe!",
            textInnov: "Do you like innovation? <br>This is the perfect event for you.",
            textCourses: "The best mix of <br> fun and learning!"
        },
        teams: {
            title: "Teams",
            titleCnt: "Academic Content",
            titleMkt: "Marketing and Public Relations",
            titleHR: "Human Resources",
            titleIT: "Information Technology",
            titleFR: "Corporate Relations",
            textCnt: "Ensure the development of the academic content of the "+
                     "Association's external events in a diversified and innovative way.",
            textMkt: "Ensure the dissemination and promotion of the Association and its activities.",
            textHR: "Organise and stimulate activities of integration and "+
                    "motivation for the members of the Association.",
            textIT: "Create, maintain and manage the Association's technological resources.",
            textFR: "Create, maintain and manage the corporate relations of the Association.",
        },
        mgmt: {
            boardtitle: "Board",
            president: "President",
            treasurer: "Treasurer",
            secretary: "Secretary",
            vphr: "Vice President for Human Resources",
            vpis: "Vice President for Internal Support",
            mgmttitle: "Coordinators",
            mkt: "Marketing and Public Relations",
            cnt: "Academic Content",
            it: "Information Technology",
            fr: "Corporate Relations"
        },
        partners: {
            title: "Our Partners"
        },
        contacts: {
            title: "Contacts",
            addresstitle: "Address:",
            address: "Business Incubator of University of Aveiro<br/>"+
                     "Santiago University Campus, Building 1<br/>"+
                     "3810-193 Aveiro<br/>"+
                     "Portugal",
            teltitle: "Telephone:"
           
        },
        modalBEST: {
            p1: "BEST (Best of European Students of Technology) is a non-profit and apolitical European organization of science, "+
                "engineering and technology students, present in 97 universities in 34 countries with approximately 3000 members "+
                "and covering approximately 1 million students.<br>",
            mission: "Mission",
            missionText: "The purpose of BEST is to develop students' abilities, by offering them the opportunity to add soft skills to "+
                         "their academical journey, in a multicultural environment in order to better comprehend and adapt to today's "+
                         "society and the global market. Best, through its events, tries to aproach students, universities and companies.",
            vision: "Vision",
            visionText: "BEST's vision is based on creating an environment of diversity among students, conducive to learning, "+
                        "understanding and respect for different cultures and social backgrounds, as well as preparing students for a "+
                        "global job market. BEST believes that culturally enriched environments increase the likelihood of success of a "+
                        "work group.",
            site: "Visit the official page"
        },
        modalLBG: {
            organization: "Organization",
            p1: "BEST Aveiro is one of the 97 local groups of BEST, a European organization of students of Sciences, Engineering "+
                "and Technology, present in 97 universities of 34 countries, who work cooperatively to provide the various services that the organization offers.",
            p2: "The BEST local group in Aveiro was founded in 2008 under the leadership of Eric Bosne, whose objective was to develop their academic skills, share "+
                "experiences and meet new people, both in Portugal and abroad, infecting some colleagues with the same will.",
            p3: "This is an organization of and for students, working for their personal, academic and cultural development, offering several opportunities for "+
                "complementary training and exchange. To this end, BEST Aveiro organizes annually:",
            events: {
                courses: "Seasonal Course",
                ebec: "Engineering Competition EBEC Aveiro (European BEST Engineering Competition)",
                btd: "BEST Training Days, all year round"
            },
            city: "City",
            p1c: "Aveiro is a picturesque Portuguese city, known as the 'Venice of Portugal'. Capital of the district of Aveiro, it is located in the Center region, "+
                 "with about 60 000 inhabitants. It was elevated to the city in 1759 by D.José I.",
            p2c: "The attribution of the nickname 'Portuguese Venice' is due to the fact that the city presents a discontinuous territory, with a large number of "+
                 "branches of the Ria de Aveiro to divide the territory. This zone belongs to the basin of the Vouga River, that "+
                 "when arriving at Aveiro is divided in numerous channels creating a unique landscape. The existence of these "+
                 "channels gave rise to the activity of 'harvesting of moliço', which was used in the past centuries for the "+
                 "production of fertilizer that supplied the agricultural lands of the region. This activity was carried out using "+
                 "the moliceiros boats that still today can be found in the center of the city, although they are used only for "+
                 "tourist purposes. These boats are one of the ex-libris of this region, being highly appreciated for their colors "+
                 "and decoration that is usually humorous, alluding to everyday situations.",
            p3c: "A doçaria de Aveiro é também bastante reconhecida, principalmente devido aos ovos moles exclusivamente produzidos na cidade.",
            p4c: "Other Aveirense's city brands are salinas, which were used for salt production even before the founding of Portugal. Due to the production and "+
                 "commercialization of salt, the port area of Aveiro has grown to become the main national fishing and drought "+
                 "site for cod. Currently the salinas are mostly deactivated, or converted to fish farms. The old salt warehouses "+
                 "on the São Roque canal are now being converted mainly into bars and restaurants, in order to preserve the city's "+
                 "cultural heritage.",
            p5c: "Besides being recognized as a maritime city, Aveiro has a strong industrial identity and a very important port.",
            uni: "University",
            textuni: "The University of Aveiro, with around 15 000 students and founded in 1973, is a nationally renowned university, as "+
                     "well as a European university, due to the high quality of its research in several areas (on average, each teacher "+
                     "publishes 1 , 5 scientific articles per year), of its faculty and of its infrastructures.<br><br> "+
                     "The area of its campus is equivalent to about 92 soccer fields, with 65 buildings (some of which are great "+
                     "architectural works) and 15 blocks of residences. These include:",
            list: {
                refectory: "Canteens",
                library: "Libraries",
                bookstore: "Bookstores",
                conference: "Rooms for conferences and shows",
                gallery: "Exhibition galleries",
                square: "Sports Pavilion",
                track: "Athletics track",
                laundry: "Laundry",
                mail: "Post Office",
                bank: "Bank",
                store: "Stores"
            }
            
        }
    };
    var vm = {
        body: ko.observable(language),
    };
    ko.applyBindings(vm);
});
