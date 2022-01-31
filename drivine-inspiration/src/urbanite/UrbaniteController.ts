import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RouteRepository } from '@/traffic/RouteRepository';
import { Route } from '@/traffic/Route';
import { CreatePersonDto } from './create-person.dto';
import { Urbanite } from './Urbanite';
import { Metro } from './Metro';
import { UrbaniteRepository } from './UrbaniteRepository';

export interface RecommendedRouteDto {
    start: string;
    destination: string;
    via: string[];
    travelTime: number;
}

@Controller('/urbanite')
export class UrbaniteController {
    constructor(readonly urbaniteRepository: UrbaniteRepository) {}

    @Post()
    createPerson(@Body() createContactDto: CreatePersonDto) {
        const myMeter = new Metro('Puno');
        const urbanite = new Urbanite('99', createContactDto.firstName, createContactDto.lastName, new Date(), [
            myMeter
        ]);

        this.urbaniteRepository.save(urbanite);
    }

    /* @Get('/between/:start/:dest')
    async routeBetween(@Param('start') start: string, @Param('dest') dest: string): Promise<RecommendedRouteDto[]> {
        const routes = await this.routeRepository.findRoutesBetween(start, dest);
        return routes.map(
            (it: Route): RecommendedRouteDto => ({
                start: it.start,
                destination: it.destination,
                via: it.intermediateMetros(),
                travelTime: it.travelTime
            })
        );
    }

    @Get('/fastest/between/:start/:dest')
    async fastestBetween(@Param('start') start: string, @Param('dest') dest: string): Promise<RecommendedRouteDto> {
        const route = await this.routeRepository.findFastestBetween(start, dest);
        console.log('-------------------route', route);
        return <RecommendedRouteDto>{
            start: route.start,
            destination: route.destination,
            via: route.intermediateMetros(),
            travelTime: route.travelTime
        };
    } */
}
