package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.WarehouseItemDTO;
import sdaproject.server.entity.WarehouseItemEntity;
import sdaproject.server.service.WarehouseItemService;

@RestController
@RequestMapping("/api/warehouse-items")
public class WarehouseItemResource extends AbstractResource<WarehouseItemEntity, WarehouseItemDTO> {

    private final Logger log = LoggerFactory.getLogger(WarehouseItemResource.class);

    private final WarehouseItemService warehouseItemService;

    public WarehouseItemResource(WarehouseItemService warehouseItemService) {
        this.warehouseItemService = warehouseItemService;
    }

    @Override
    public WarehouseItemService getService() {
        return warehouseItemService;
    }

}
