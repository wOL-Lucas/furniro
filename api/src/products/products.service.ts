import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Sku } from './entities/sku.entity';
import { UpdateSkuDto } from './dto/update-sku.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Sku)
    private skuRepository: Repository<Sku>
  ){}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  findAll() {
    return this.productRepository.find();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
  
  getSkuByCode(code: string) {
    return this.skuRepository.findOneBy({ code });
  }

  updateSku(code: string, updateSkuDto: UpdateSkuDto) {
    return this.skuRepository.update(code, updateSkuDto);
  }
}
