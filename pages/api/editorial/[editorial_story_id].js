export default function handler(req, res) {
    const { editorial_story_id } = req.query

    const title = "China dam over Brahmaputra will be a disaster";

    res.status(200).json(
        {
            "story_title": title,
            "story_categories": ["Editorial"],
            "story_sub_heading": "As a lower riparian state with considerable established user rights to the waters of the trans-border rivers, the Centre has consistently conveyed its views and concerns to China.",
            "story_author": "Arati Baruah",
            "story_date": "20.09.2011",
            "story_header_image": "https://images.outlookindia.com/public/uploads/articles/2021/3/11/Dam1-kQ2B--621x414@LiveMint_570_850.jpg",
            "story_header_image_caption": "Representational | PTI",
            "story_content": " <p>China is approving a mega dam on the world’s largest and the deepest gorge over the Tsangpo/ Siang/ Brahmaputra. Actually, it is a Giga dam as it is going to produce 60GW of energy. China’s aim to achieve carbon neutrality by 2060 by building a Giga dam for cheap electricity is outrageous. China already has an excess of energy, who will benefit from this electricity done at the expense of billions of people, including the death of the river Siang/Brahmaputra? From the glaciers of western Tibet, near Manas sarovara and the Kailash Mountain, the Yarlung Tsangpo reaches heights of nearly 5,000 meters above sea level, making it the highest river in the world. Just on the top of Arunachal Pradesh the river plunges 2,700 meters through what is known as the Yarlung Tsangpo Grand Canyon, forming a gorge more than twice the depth of the Grand Canyon in the United States</p>  <p>A mega dam itself is a word synonymous to all the bad superlatives, from the destruction of nature and biodiversity to the dislocation of people who belongs to the natural environment. In addition, this place is not for a dam but for an international park and research. A deep steep gorge plus the bend is a place to protect. The satellites play a strategic role picturing this river, satellite images expose all the snaking of the river in detail. A team of American white water kayakers were successful in kayaking part of this gorge only because they spent hours and hours mapping this gorge from the satellite images whereas there was one death in the National Geographic sponsored plan</p>  <p>Tibetans like to live at 10,000 feet or higher. Oxygen reduces every 10,000 feet. These people are used to live in thin air and to respect nature is in their DNA. Nobody has traversed this river in its entirety. It is not possible, there are no access points or banks. The river is highly ferocious in spring with snow melts and monsoon water. Why do you want to tame or silence this wild river? Assam has been the gateway for Tibet, the Gorge is not too far from Daffla, Abor and, Mishimi hills. There are yak and pony trails to the river. The Dam is going to create havoc to the people of the gorge and down the hills.</p> "



        }
    )
}