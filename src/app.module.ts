import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoModule } from './crypto/crypto.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [CryptoModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
