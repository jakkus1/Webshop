package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import sdaproject.server.converter.Converter;
import sdaproject.server.converter.WarehouseItemConverter;
import sdaproject.server.dto.WarehouseItemDTO;
import sdaproject.server.entity.WarehouseItemEntity;
import sdaproject.server.repository.WarehouseItemRepository;
import sdaproject.server.service.WarehouseItemService;

@Service
public class WarehouseItemServiceImpl extends AbstractServiceImpl<WarehouseItemEntity, WarehouseItemDTO> implements WarehouseItemService {

    private final WarehouseItemRepository warehouseItemRepository;
    private final WarehouseItemConverter warehouseItemConverter;

    public WarehouseItemServiceImpl(WarehouseItemRepository warehouseItemRepository, WarehouseItemConverter warehouseItemConverter) {
        this.warehouseItemRepository = warehouseItemRepository;
        this.warehouseItemConverter = warehouseItemConverter;
    }

    @Override
    protected JpaRepository<WarehouseItemEntity, Long> getRepo() {
        return warehouseItemRepository;
    }

    @Override
    protected Converter<WarehouseItemEntity, WarehouseItemDTO> getConverter() {
        return warehouseItemConverter;
    }

}
