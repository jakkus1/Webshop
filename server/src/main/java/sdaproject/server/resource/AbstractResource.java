package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import sdaproject.server.dto.AbstractDTO;
import sdaproject.server.entity.AbstractEntity;
import sdaproject.server.service.AbstractService;

import java.util.Collection;

public abstract class AbstractResource<ENTITY extends AbstractEntity, DTO extends AbstractDTO> {

    private static final Logger log = LoggerFactory.getLogger(AbstractResource.class);

    public abstract AbstractService<ENTITY, DTO> getService();

    @GetMapping("/open/{id}")
    public DTO getById(@PathVariable("id") Long id) {
        return getService().findById(id);
    }

    @GetMapping("/open")
    public Collection<DTO> getAll() {
        return getService().getAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public DTO create(@RequestBody DTO dto) {
        return getService().save(dto);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public DTO update(@RequestBody DTO dto) {
        return getService().update(dto);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void delete(@PathVariable("id") Long id) throws Exception {
        getService().delete(id);
    }

}
