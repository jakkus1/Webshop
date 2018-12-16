package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.WarehouseItemDTO;
import sdaproject.server.entity.WarehouseItemEntity;

@Component
public class WarehouseItemConverter implements Converter<WarehouseItemEntity, WarehouseItemDTO> {

    private final ProductConverter productConverter;

    public WarehouseItemConverter(ProductConverter productConverter) {
        this.productConverter = productConverter;
    }

    @Override
    public WarehouseItemEntity convertToEntity(WarehouseItemDTO dto) {
        WarehouseItemEntity entity = new WarehouseItemEntity();

        entity.setId(dto.getId());
        entity.setQuantity(dto.getQuantity());
        entity.setPrice(dto.getPrice());
        entity.setProduct(productConverter.convertToEntity(dto.getProduct()));

        return entity;
    }

    @Override
    public WarehouseItemDTO convertToDto(WarehouseItemEntity entity) {
        WarehouseItemDTO dto = new WarehouseItemDTO();

        dto.setId(entity.getId());
        dto.setQuantity(entity.getQuantity());
        dto.setPrice(entity.getPrice());
        dto.setProduct(productConverter.convertToDto(entity.getProduct()));

        return dto;
    }
}
