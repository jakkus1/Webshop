package sdaproject.server.service.impl;

import org.springframework.stereotype.Service;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.repository.ProductCategoryRepository;
import sdaproject.server.repository.ProductRepository;
import sdaproject.server.service.DictionaryService;

import java.util.List;

@Service
public class DictionaryServiceImpl implements DictionaryService {

    private final ProductCategoryRepository productCategoryRepository;
    private final ProductRepository productRepository;

    public DictionaryServiceImpl(ProductCategoryRepository productCategoryRepository, ProductRepository productRepository) {
        this.productCategoryRepository = productCategoryRepository;
        this.productRepository = productRepository;
    }

    @Override
    public List<DictionaryDTO> getProductCategoriesDictionary() {
        return productCategoryRepository.getProductCategoriesDictionary();
    }

    @Override
    public List<DictionaryDTO> getProductsDictionary() {
        return productRepository.getProductsDictionary();
    }
}
