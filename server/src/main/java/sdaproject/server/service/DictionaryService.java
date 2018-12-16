package sdaproject.server.service;

import sdaproject.server.dto.DictionaryDTO;

import java.util.List;

public interface DictionaryService {
    List<DictionaryDTO> getProductCategoriesDictionary();
    List<DictionaryDTO> getProductsDictionary();
}
