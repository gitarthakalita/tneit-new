export default function handler (req,res) {
    const {story_id} = req.query

    res.end(`Post : ${story_id}`)
}