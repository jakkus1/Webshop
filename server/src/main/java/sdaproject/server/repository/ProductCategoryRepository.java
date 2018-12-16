package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.entity.ProductCategoryEntity;

import java.util.List;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategoryEntity, Long> {

    @Query("SELECT new sdaproject.server.dto.DictionaryDTO(id, name) FROM ProductCategoryEntity")
    List<DictionaryDTO> getProductCategoriesDictionary();

}
