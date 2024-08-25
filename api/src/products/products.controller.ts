import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ParameterValidationPipe } from 'src/user/pipes/parameter-validation.pipe';

@Controller('/api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
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
