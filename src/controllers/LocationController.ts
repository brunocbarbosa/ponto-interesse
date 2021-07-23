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
  async create(req: Request, res: Response){
    const { name, coord_x, coord_y } = req.body;

    const locationService = new LocationService();

    await locationService.create({
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