package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;
import sdaproject.server.service.DictionaryService;
import sdaproject.server.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/dictionary")
public class DictionaryResource {

    private final Logger log = LoggerFactory.getLogger(DictionaryResource.class);

    private final DictionaryService dictionaryService;

    public DictionaryResource(DictionaryService dictionaryService) {
        this.dictionaryService = dictionaryService;
    }

    @GetMapping("/product-categories")
    public List<DictionaryDTO> getProductCategoriesDictionary() {
        return dictionaryService.getProductCategoriesDictionary();
    }

    @GetMapping("/products")
    public List<DictionaryDTO> getProductDictionary() {
        return dictionaryService.getProductsDictionary();
    }

}
