export default function handler (req,res) {
    const {story_id} = req.query

    res.status(200).json(
        {
            "story_title":"Pfizer Nears Deal With Trump Administration to Provide More Vaccine  Doses",
            "story_categories": ["Featured", "World"]
        }
    )
}