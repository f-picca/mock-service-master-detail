import { NextApiRequest, NextApiResponse } from 'next';

let detailData: { id: number; masterId: string; content: string[] }[] = [{content: ["447632AABZB6832","757943AACAG9055"], id: 1, masterId: "test1"},{content: ["757943AACAG9055"], id: 2, masterId: "test2"}]; // In-memory storage for detail records

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { masterId } = req.query;

    switch (method) {
        case 'GET':
            const details = detailData
                .filter(detail => detail.masterId === String(masterId))
                .flatMap(detail => detail.content);
            res.status(200).json(details);
            break;
        case 'POST':
            const newDetail = { id: Date.now(), masterId: req.body.masterId, content: req.body.content };
            detailData.push(newDetail);
            res.status(201).json(newDetail.content);
            break;
        case 'PUT':
            const { id, content } = req.body;
            const index = detailData.findIndex(detail => detail.id === id);
            if (index !== -1) {
                detailData[index].content = content;
                res.status(200).json(detailData[index].content);
            } else {
                res.status(404).json({ message: 'Detail not found' });
            }
            break;
        case 'DELETE':
            const deleteId = req.query.id;
            detailData = detailData.filter(detail => detail.id !== Number(deleteId));
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
