import { NextApiRequest, NextApiResponse } from 'next';

let masterData = [{id: "test1"},{id: "test2"}]; // In-memory storage for master records

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            const { filter } = req.query;
            let masterIds = masterData.map(master => master.id);
            if (filter) {
                masterIds = masterIds.filter(id => id.includes(String(filter)));
            }
            res.status(200).json(masterIds);
            break;
        case 'POST':
            const newMaster = req.body;
            masterData.push(newMaster);
            res.status(201).json(newMaster.id);
            break;
        case 'PUT':
            const { id, ...updatedData } = req.body;
            masterData = masterData.map(master => (master.id === id ? { ...master, ...updatedData } : master));
            res.status(200).json(updatedData);
            break;
        case 'DELETE':
            const { id: deleteId } = req.body;
            masterData = masterData.filter(master => master.id !== deleteId);
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}