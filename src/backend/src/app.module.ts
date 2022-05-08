import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CollectionsModule } from './collections/collections.module';
import { NftsModule } from './nfts/nfts.module';

@Module({
  imports: [UsersModule, CollectionsModule, NftsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
