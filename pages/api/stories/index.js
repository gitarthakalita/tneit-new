export default function handler (req,res) {
    res.status(200).json(
        {
            "stories" : [
                {
                    "story_id": 1,
                    "story_title":"Hello Mew"
                }
            ]
        }
    )
}