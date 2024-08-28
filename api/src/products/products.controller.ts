import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards, ValidationPipe, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ParameterValidationPipe } from 'src/user/pipes/parameter-validation.pipe';
import { GetProductsQueryDto } from './dto/products-query.dto';
import { UpdateSkuDto } from './dto/update-sku.dto';
import { ApiBody, ApiOAuth2, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GetProductsDto } from './dto/get-products.dto';
import { CreateSkuDto } from './dto/create-sku.dto';

@ApiTags('Products')
@Controller('/api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create Product' })
  @ApiBody({ type: CreateProductDto })
  @ApiSecurity('jwt')
  @ApiResponse({ status: 201, description: 'Product created' })
  @ApiResponse({ status: 400, description: 'Bad request, verify the product data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get Products' })
  @ApiResponse({ status: 200, description: 'Products found', type: GetProductsDto}) 
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
  @ApiOperation({ summary: 'Update Product' })
  @ApiBody({ type: CreateProductDto })
  @ApiSecurity('jwt')
  @ApiResponse({ status: 200, description: 'Product updated' })
  @ApiResponse({ status: 400, description: 'Bad request, verify the product data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  update(@Param('id', ParameterValidationPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Get('/sku/:code')
  @ApiTags('Product SKU')
  @ApiOperation({ summary: 'Get SKU by code' })
  @ApiResponse({ status: 200, description: 'SKU found', type: CreateSkuDto })
  @ApiResponse({ status: 404, description: 'SKU not found' })
  getSkuByCode(@Param('code') code: string) {
    return this.productsService.getSkuByCode(code);
  }

  @Patch('/sku/:code')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @ApiTags('Product SKU')
  @ApiOperation({ summary: 'Update SKU by code' })
  @ApiBody({ type: CreateSkuDto })
  @ApiSecurity('jwt')
  @ApiResponse({ status: 200, description: 'SKU updated', type: CreateSkuDto })
  @ApiResponse({ status: 400, description: 'Bad request, verify the SKU data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  updateSkyByCode(@Param('code') code: string, @Body() updateProductDto: UpdateSkuDto) {
    return this.productsService.updateSku(code, updateProductDto);
  }
}
