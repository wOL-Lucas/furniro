import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Sku } from './entities/sku.entity';
import { UpdateSkuDto } from './dto/update-sku.dto';
import { GetProductsQueryDto } from './dto/products-query.dto';

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

  async findAll(query: GetProductsQueryDto): Promise<Product[]> {
    const { showPerPage = 10, offset = 1, id, category } = query;
    const take = showPerPage;
    const skip = (offset - 1) * showPerPage;

    let queryBuilder = this.productRepository.createQueryBuilder('product');

    if (id) {
      queryBuilder = queryBuilder.andWhere('product.id = :id', { id });
    }

    if (category) {
      queryBuilder = queryBuilder.andWhere('product.category = :category', { category });
    }

    queryBuilder = queryBuilder
      .orderBy('product.id', 'DESC')
      .skip(skip)
      .take(take)
      .leftJoinAndSelect('product.skus', 'sku')

    return await queryBuilder.getMany();
  }

  async count(query: GetProductsQueryDto): Promise<number> {
    const { id, category } = query;

    let queryBuilder = this.productRepository.createQueryBuilder('product');

    if (id) {
      queryBuilder = queryBuilder.andWhere('product.id = :id', { id });
    }

    if (category) {
      queryBuilder = queryBuilder.andWhere('product.category = :category', { category });
    }

    return await queryBuilder.getCount();
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
