let id = 2;

const myLocations =  [
    {
        id: 0,
        confession: 'fbfdnbfd'
    },
    {
        id:1,
        confession: 'sdgsdgd'
    }
];

module.exports = {
    getConfessions: (req,res) => {
        res.status(200).json(myConfessions);
    },
    addConfession: (req,res) => {
        const newConfession = {
            id,
            ...req.body
        }
        myConfessions.push(newConfession);
        id++;
        res.status(200).json(myConfessions)
    }
}