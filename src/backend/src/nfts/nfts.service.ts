import { Injectable } from '@nestjs/common';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';

@Injectable()
export class NftsService {
  create(createNftDto: CreateNftDto) {
    return 'This action adds a new nft';
  }

  findOne(id: number) {
    return `This action returns a #${id} nft`;
  }
}
