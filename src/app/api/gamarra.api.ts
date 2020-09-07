import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Category } from '../models/categories.model';
import { Product } from '../models/product.model';
import { prependBackendUrl } from '../lib/helpers/url.helper';
import { Order } from '../models/order.model';
import { SubOrder } from '../models/suborder.model';

@Injectable({
  providedIn: 'root',
})
export class GamarraApi {
  getCategoriesQuery = gql`
    query {
      categorias {
        id
        nombre
        icono {
          url
        }
      }
    }
  `;

  getProductsQuery = gql`
    query {
      productos {
        id
        nombre
        stock
        precio
        imagenes {
          url
        }
        categorias {
          id
        }
      }
    }
  `;

  getOrdersQuery = gql`
    query {
      ordens {
        id
        fecha
        tipoEnvio
        costoEnvio
        costoTotal
        tipoFacturacion
        estado
        subordenes {
          id
          cantidad
          aceptado
          producto {
            id
            nombre
            stock
            precio
            imagenes {
              url
            }
            categorias {
              id
            }
          }
        }
      }
    }
  `;

  constructor(private apollo: Apollo) {}

  getCategories(): Observable<Category[]> {
    return this.apollo
      .query<{ categorias }>({
        query: this.getCategoriesQuery,
      })
      .pipe(
        map(({ data: { categorias } }) =>
          categorias.map(
            (category) =>
              ({
                id: category.id,
                name: category.nombre,
                iconUrl: category.icono ? category.icono.url : null,
              } as Category)
          )
        )
      );
  }

  getProducts(): Observable<Product[]> {
    return this.apollo
      .query<{ productos }>({
        query: this.getProductsQuery,
      })
      .pipe(
        map(({ data: { productos } }) =>
          productos.map(
            (product) =>
              ({
                id: product.id,
                name: product.nombre,
                stock: product.stock,
                price: product.precio,
                imagesUrl: product.imagenes
                  ? product.imagenes.map((i) => prependBackendUrl(i.url))
                  : [],
                categories: product.categorias
                  ? product.categorias.map((c) => ({ id: c.id } as Category))
                  : [],
              } as Product)
          )
        )
      );
  }

  getOrders(): Observable<Order[]> {
    return this.apollo
      .query<{ ordens }>({
        query: this.getOrdersQuery,
      })
      .pipe(
        map(({ data: { ordens } }) =>
          ordens.map(
            (order) =>
              ({
                id: order.id,
                date: order.fecha,
                sendingType: order.tipoEnvio,
                deliveryCost: order.costoEnvio,
                totalCost: order.costoTotal,
                billingType: order.tipoFacturacion,
                state: order.estado,
                subOrders: order.subordenes
                  ? order.subordenes.map(
                      (suborder) =>
                        ({
                          id: suborder.id,
                          quantity: suborder.cantidad,
                          accepted: suborder.aceptado,
                          product: suborder.producto
                            ? ({
                                id: suborder.producto.id,
                                name: suborder.producto.nombre,
                                stock: suborder.producto.stock,
                                price: suborder.producto.precio,
                                imagesUrl: suborder.producto.imagenes
                                  ? suborder.producto.imagenes.map((i) =>
                                      prependBackendUrl(i.url)
                                    )
                                  : [],
                                categories: suborder.producto.categorias
                                  ? suborder.producto.categorias.map(
                                      (c) => ({ id: c.id } as Category)
                                    )
                                  : [],
                              } as Product)
                            : null,
                        } as SubOrder)
                    )
                  : [],
              } as Order)
          )
        )
      );
  }
}
