export default function handler(req,res) {
    res.status(200).json(
        {
            "featuredMain":{
                "title":"Pfizer Nears Deal With Trump Administration to Provide More Vaccine Doses ",
                "excerpts":["Pfizer could provide tens of millions of additional vaccine doses to the U.S. under a deal that would give it better access to manufacturing supplies." , "The deal would help the U.S. at least partly offset a looming shortage that could leave as many as 110 million adults uncovered in the first half of 2021."],
                "imageUrl":"/assets/featured-main.png",
                "slug":"pfizer-nears-deal-with-trump-administration",
                "category":"world"
        
            },
            "featuredExclussive":[
                {
                    "id":1,
                    "title":"China grants policy leeway to spur Shanghai as nation’s growth pioneer",
                    "image_url":"https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2021/07/15/d8254c32-e551-11eb-9aba-1b7e08262541_image_hires_233020.jpeg?itok=0rLU1T7E&v=1626363027",
                    "excerpt":["China will halve the tax rates for qualified technology companies in Shanghai’s Pudong district and grant the local government greater freedoms in making its own legislation and liberalising the capital markets."]
                },
                {
                    "id":2,
                    "title":"US firms in China ‘confused’ by new Biden warning on Xinjiang business risks",
                    "image_url":"https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2021/07/16/d74eacbe-e555-11eb-9aba-1b7e08262541_image_hires_024804.jpg?itok=tAjmuuPh&v=1626374898",
                    "excerpt":["The White House update on Xinjiang supply chain risks adds pressure on American companies to cut exposure to the region, but many say compliance will be tricky."]
                },
                {
                    "id":3,
                    "title":"US Air Force makes short stop in Taiwan as de facto ambassadors change",
                    "image_url":"https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2021/07/15/30b1dbf8-e553-11eb-9aba-1b7e08262541_image_hires_212725.JPG?itok=ucXhw5EL&v=1626355651",
                    "excerpt":["As director of the American Institute in Taiwan Brent Christensen leaves and Sandra Oudkirk arrives, Beijing lets its anger be known."]
                }
            ],
            "liveUpdate":[
                {
                    "id":1,
                    "content":"US bill banning Xinjiang imports over forced labour fails to become law",
                    "timestamp":"",
                    "category":"world"
                },
                {
                    "id":2,
                    "content":"Six times Blackpink made the headlines in 2020",
                    "timestamp":"",
                    "category":"lifestyle"
                },
            
                {
                    "id":3,
                    "content":"Boston Doctor reports serious allergic reaction after getting Moderna’s Covid Vaccine",
                    "timestamp":"",
                    "category":"science"
                },
                {
                    "id":4,
                    "content":"Tokyo’s bid to compete with Hong Kong faces taxing problem",
                    "timestamp":"",
                    "category":"economy"
                },
                {
                    "id":5,
                    "content":"US bill banning Xinjiang imports over forced labour fails to become law",
                    "timestamp":"",
                    "category":"world"
                },
                {
                    "id":6,
                    "content":"Six times Blackpink made the headlines in 2020",
                    "timestamp":"",
                    "category":"world"
                }
            ],
            "featuredOpinion": [
                {
                    "id":1,
                    "title":"It Shouldn’t Fall to Veterans to Clean Up Biden’s Mess",                       
                    "author":"Elliot Ackerman"
                },
                {
                    "id":2,
                    "title":"What Trump's disgraceful deal with the Taliban has wrought",                        
                    "author":"Kori Schake"
                },
                {
                    "id":3,
                    "title":"The right-wingers who admire the Taliban",                       
                    "author":"Michelle Goldberg"
                },
                {
                    "id":4,
                    "title":"This is how theocracy shrivels",                        
                    "author":"David Brooks"
                }
            ],
            "editorsPick":{
                "title":"Driver Rams Into Officers at Capitol, Killing One and Injuring Another",
                "excerpts":["Less than three months after the Jan. 6 riot, a Capitol Police officer was killed when a man slammed his car into him and another officer.", "The suspect, a 25-year-old man who was alone and armed with a knife, was shot and killed.", "The attack shocked a Capitol slowly returning to normalcy, raising new questions about securing the complex."],
                "imageUrl":"/assets/featured-main.png",
                "slug":"pfizer-nears-deal-with-trump-administration",
                "category":"world"
            },
            "editorialToday":{
                "title":"China dam over Brahmaputra will be a disaster ",
                "excerpts":"China is approving a mega dam on the world’s largest and the deepest gorge over the Tsangpo/ Siang/ Brahmaputra. Actually, it is a Giga dam as it is going to produce 60GW of energy. China’s aim to achieve carbon neutrality by 2060 by building a Giga dam for cheap electricity is outrageous. China already has an excess of energy, who will benefit from this electricity done at the expense of billions of people, including the death of the river Siang/Brahmaputra? ",                        
                "slug":"china-dam-over-brahmaputra-will-be-a-disaster",
                "category":"editorial"
            }
        }
    )
}