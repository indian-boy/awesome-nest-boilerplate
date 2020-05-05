import { Injectable } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid';

@Injectable()
export class GeneratorService {
    public uuid(): string {
        return uuidv1();
    }
    public fileName(ext: string) {
        return this.uuid() + '.' + ext;
    }
}
