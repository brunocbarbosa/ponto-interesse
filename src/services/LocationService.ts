import knex from '../database/connection';

interface ILocationRequest{
  name: string;
  coord_x: number;
  coord_y: number;
}

interface IDmAxRequest{
  dMax: number;
  coordX: number;
  coordY: number;
}

class LocationService{
  async getAll(){
    const locations = await knex('locations')
      .select('*');

    return locations;
  }

  async getInterestPoint({dMax, coordX, coordY}: IDmAxRequest){
    let interestPoints: string[] = []

    const locations = await knex<ILocationRequest>('locations')
      .select('name', 'coord_x', 'coord_y')

    locations.forEach(loc => {
      let location = Math.sqrt(Math.pow(loc.coord_x - coordX, 2) + Math.pow(loc.coord_y - coordY, 2))

      if(location <= dMax) interestPoints.push(loc.name)
    })

    return interestPoints
  }

  async create({ name, coord_x, coord_y }: ILocationRequest){

    const trx = await knex.transaction();
    
    const location = await trx('locations').insert({
      name,
      coord_x,
      coord_y
    })

    await trx.commit();

    return location;
  }

}

export { LocationService }