package sdaproject.server.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "warehouse_item")
@SequenceGenerator(name = "idGenerator", sequenceName = "public.warehouse_item_id_seq", allocationSize = 1)
public class WarehouseItemEntity extends AbstractEntity {

    @Column
    private Integer quantity;

    @Column
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public ProductEntity getProduct() {
        return product;
    }

    public void setProduct(ProductEntity product) {
        this.product = product;
    }
}
