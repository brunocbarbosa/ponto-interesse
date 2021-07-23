import knex from '../database/connection';

interface ILocationRequest{
  name: string;
  coord_x: number;
  coord_y: number;
}

class LocationService{
  async getAll(){
    const locations = await knex('locations')
      .select('*');

    return locations;
  }

  async create({ name, coord_x, coord_y }: ILocationRequest){

    const trx = await knex.transaction();
    
    const location = await trx('locations').insert({
      name,
      coord_x,
      coord_y
    })

    await trx.commit();

    console.log(location)

    return location;
  }

}

export { LocationService }