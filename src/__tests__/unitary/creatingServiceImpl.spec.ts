import { ServiceImplEntity } from "../../serviceName/domain/serviceImpl/entitites"

describe('Testing new service implementation', ()=> { 
    it('should return an object with two attributes', () => { 
        const serviceImplEntity: ServiceImplEntity = new ServiceImplEntity({
            name: 'Service_Implementation01',
            attr: { 
                'field1': 'lorem ipsum',
                'field2': [1, 3, 4, 6, 9],
                'field3': 12345 
            }
        });
        expect(serviceImplEntity).toMatchObject({
            name: 'Service_Implementation01',
            attr: { 
                'field1': 'lorem ipsum',
                'field2': [1, 3, 4, 6, 9],
                'field3': 12345 
            }
        });
    })
})