import {Request, Response} from "express"
export type expressHandler <RQ, RS>= (req: Request<any, any, RQ>, res: Response<RS>) => void