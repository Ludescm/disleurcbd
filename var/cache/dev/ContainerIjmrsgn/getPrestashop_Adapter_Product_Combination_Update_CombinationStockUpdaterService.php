<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the public 'prestashop.adapter.product.combination.update.combination_stock_updater' shared service.

return $this->services['prestashop.adapter.product.combination.update.combination_stock_updater'] = new \PrestaShop\PrestaShop\Adapter\Product\Combination\Update\CombinationStockUpdater(${($_ = isset($this->services['prestashop.adapter.product.stock.repository.stock_available_repository']) ? $this->services['prestashop.adapter.product.stock.repository.stock_available_repository'] : $this->load('getPrestashop_Adapter_Product_Stock_Repository_StockAvailableRepositoryService.php')) && false ?: '_'}, ${($_ = isset($this->services['prestashop.adapter.product.combination.repository.combination_repository']) ? $this->services['prestashop.adapter.product.combination.repository.combination_repository'] : $this->load('getPrestashop_Adapter_Product_Combination_Repository_CombinationRepositoryService.php')) && false ?: '_'}, ${($_ = isset($this->services['prestashop.core.stock.stock_manager']) ? $this->services['prestashop.core.stock.stock_manager'] : ($this->services['prestashop.core.stock.stock_manager'] = new \PrestaShop\PrestaShop\Core\Stock\StockManager())) && false ?: '_'});
