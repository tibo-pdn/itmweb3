import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionsService {
  create(createCollectionDto: CreateCollectionDto) {
    return 'This action adds a new collection';
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }
}
