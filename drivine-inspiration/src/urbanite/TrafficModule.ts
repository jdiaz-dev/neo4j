import { Module } from '@nestjs/common';
import { RouteRepository } from '../traffic/RouteRepository';
import { RouteController } from '@/traffic/RouteController';
import { UrbaniteRepository } from './UrbaniteRepository';
import { UrbaniteController } from './UrbaniteController';

@Module({
    imports: [],
    providers: [RouteRepository, UrbaniteRepository],
    controllers: [RouteController, UrbaniteController],
    exports: []
})
export class TrafficModule {}
