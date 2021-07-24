import { Request, Response } from "express";
import { LocationService } from "../services/LocationService";

class LocationController{
  async getAll(req: Request, res: Response){
    const locationService = new LocationService();

    const locations = await locationService.getAll();

    return res.json({
      locations
    })
  }

  async getInterestPoint(req: Request, res: Response){
    const { dMax, coordX, coordY } = req.body;

    const locationService = new LocationService();

    const interestPointList = await locationService.getInterestPoint({dMax, coordX, coordY})

    return res.json({
      interestPointList
    })
  }

  async create(req: Request, res: Response){
    const { name, coord_x, coord_y } = req.body;

    if(coord_x < 0 || coord_y < 0 ) throw new Error('Not permited negative number')

    const locationService = new LocationService();

    const location = await locationService.create({
      name,
      coord_x,
      coord_y
    })

    return res.json({
      message: "Location created sucessful!!",
    })
  }
}

export { LocationController }