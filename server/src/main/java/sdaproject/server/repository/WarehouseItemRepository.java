package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sdaproject.server.entity.WarehouseItemEntity;

@Repository
public interface WarehouseItemRepository extends JpaRepository<WarehouseItemEntity, Long> {

}
