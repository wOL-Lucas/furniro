import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards, ValidationPipe, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ParameterValidationPipe } from 'src/user/pipes/parameter-validation.pipe';
import { GetProductsQueryDto } from './dto/products-query.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';

@Controller('/api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(@Query() query: GetProductsQueryDto) {
    query.showPerPage = query.showPerPage || 16;
    const products = await this.productsService.findAll(query);
    const totalItems = await this.productsService.count(query);
    const itemsPerPage = query.showPerPage;
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
  update(@Param('id', ParameterValidationPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParameterValidationPipe) id: number) {
    return this.productsService.remove(id);
  }

  @Get('/sku/:code')
  getSkuByCode(@Param('code') code: string) {
    return this.productsService.getSkuByCode(code);
  }

  @Patch('/sku/:code')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  updateSkyByCode(@Param('code') code: string, @Body() updateProductDto: UpdateSkuDto) {
    return this.productsService.updateSku(code, updateProductDto);
  }
}
