import { Injectable } from '@nestjs/common';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';

@Injectable()
export class OffresService {
  create(createOffreDto: CreateOffreDto) {
    return 'This action adds a new offre';
  }

  findAll() {
    return `This action returns all of;anga;ga;bg;abglahffres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} offre`;
  }

  update(id: number, updateOffreDto: UpdateOffreDto) {
    return `This action updates a #${id} offre`;
  }

  remove(id: number) {
    return `This action removes a #${id} offre`;
  }
}
