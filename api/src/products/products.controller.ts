import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards, ValidationPipe, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ParameterValidationPipe } from 'src/user/pipes/parameter-validation.pipe';
import { GetProductsQueryDto } from './dto/products-query.dto';

@Controller('/api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(@Query() query: GetProductsQueryDto) {
    const products = await this.productsService.findAll(query);
    const totalItems = await this.productsService.count(query);
    const itemsPerPage = query.showPerPage || 10;
    const currentPage = query.offset ?? 1;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return {
      products,
      totalItems,
      shownItems: products.length,
      currentPage,
      totalPages,
      showPerPage: itemsPerPage,
    };
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  update(@Param('id', ParameterValidationPipe) id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParameterValidationPipe) id: string) {
    return this.productsService.remove(+id);
  }

  @Get('/sku/:code')
  getSkuByCode(@Param('code') code: string) {
    return this.productsService.getSkuByCode(code);
  }
}
