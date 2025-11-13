import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model usersdata
 *
 */
export type usersdataModel = runtime.Types.Result.DefaultSelection<Prisma.$usersdataPayload>;
export type AggregateUsersdata = {
    _count: UsersdataCountAggregateOutputType | null;
    _min: UsersdataMinAggregateOutputType | null;
    _max: UsersdataMaxAggregateOutputType | null;
};
export type UsersdataMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
};
export type UsersdataMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
};
export type UsersdataCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    _all: number;
};
export type UsersdataMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
};
export type UsersdataMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
};
export type UsersdataCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    _all?: true;
};
export type UsersdataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which usersdata to aggregate.
     */
    where?: Prisma.usersdataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usersdata to fetch.
     */
    orderBy?: Prisma.usersdataOrderByWithRelationInput | Prisma.usersdataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.usersdataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usersdata from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usersdata.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned usersdata
    **/
    _count?: true | UsersdataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsersdataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsersdataMaxAggregateInputType;
};
export type GetUsersdataAggregateType<T extends UsersdataAggregateArgs> = {
    [P in keyof T & keyof AggregateUsersdata]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsersdata[P]> : Prisma.GetScalarType<T[P], AggregateUsersdata[P]>;
};
export type usersdataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersdataWhereInput;
    orderBy?: Prisma.usersdataOrderByWithAggregationInput | Prisma.usersdataOrderByWithAggregationInput[];
    by: Prisma.UsersdataScalarFieldEnum[] | Prisma.UsersdataScalarFieldEnum;
    having?: Prisma.usersdataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersdataCountAggregateInputType | true;
    _min?: UsersdataMinAggregateInputType;
    _max?: UsersdataMaxAggregateInputType;
};
export type UsersdataGroupByOutputType = {
    id: string;
    username: string;
    password: string;
    _count: UsersdataCountAggregateOutputType | null;
    _min: UsersdataMinAggregateOutputType | null;
    _max: UsersdataMaxAggregateOutputType | null;
};
type GetUsersdataGroupByPayload<T extends usersdataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersdataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersdataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersdataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersdataGroupByOutputType[P]>;
}>>;
export type usersdataWhereInput = {
    AND?: Prisma.usersdataWhereInput | Prisma.usersdataWhereInput[];
    OR?: Prisma.usersdataWhereInput[];
    NOT?: Prisma.usersdataWhereInput | Prisma.usersdataWhereInput[];
    id?: Prisma.StringFilter<"usersdata"> | string;
    username?: Prisma.StringFilter<"usersdata"> | string;
    password?: Prisma.StringFilter<"usersdata"> | string;
};
export type usersdataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type usersdataWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.usersdataWhereInput | Prisma.usersdataWhereInput[];
    OR?: Prisma.usersdataWhereInput[];
    NOT?: Prisma.usersdataWhereInput | Prisma.usersdataWhereInput[];
    username?: Prisma.StringFilter<"usersdata"> | string;
    password?: Prisma.StringFilter<"usersdata"> | string;
}, "id">;
export type usersdataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    _count?: Prisma.usersdataCountOrderByAggregateInput;
    _max?: Prisma.usersdataMaxOrderByAggregateInput;
    _min?: Prisma.usersdataMinOrderByAggregateInput;
};
export type usersdataScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersdataScalarWhereWithAggregatesInput | Prisma.usersdataScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersdataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersdataScalarWhereWithAggregatesInput | Prisma.usersdataScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"usersdata"> | string;
    username?: Prisma.StringWithAggregatesFilter<"usersdata"> | string;
    password?: Prisma.StringWithAggregatesFilter<"usersdata"> | string;
};
export type usersdataCreateInput = {
    id: string;
    username: string;
    password: string;
};
export type usersdataUncheckedCreateInput = {
    id: string;
    username: string;
    password: string;
};
export type usersdataUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type usersdataUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type usersdataCreateManyInput = {
    id: string;
    username: string;
    password: string;
};
export type usersdataUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type usersdataUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type usersdataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type usersdataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type usersdataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type usersdataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
}, ExtArgs["result"]["usersdata"]>;
export type usersdataSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
}, ExtArgs["result"]["usersdata"]>;
export type usersdataSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
}, ExtArgs["result"]["usersdata"]>;
export type usersdataSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
};
export type usersdataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["usersdata"]>;
export type $usersdataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "usersdata";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        username: string;
        password: string;
    }, ExtArgs["result"]["usersdata"]>;
    composites: {};
};
export type usersdataGetPayload<S extends boolean | null | undefined | usersdataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersdataPayload, S>;
export type usersdataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersdataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersdataCountAggregateInputType | true;
};
export interface usersdataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['usersdata'];
        meta: {
            name: 'usersdata';
        };
    };
    /**
     * Find zero or one Usersdata that matches the filter.
     * @param {usersdataFindUniqueArgs} args - Arguments to find a Usersdata
     * @example
     * // Get one Usersdata
     * const usersdata = await prisma.usersdata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersdataFindUniqueArgs>(args: Prisma.SelectSubset<T, usersdataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersdataClient<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Usersdata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersdataFindUniqueOrThrowArgs} args - Arguments to find a Usersdata
     * @example
     * // Get one Usersdata
     * const usersdata = await prisma.usersdata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersdataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersdataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersdataClient<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Usersdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersdataFindFirstArgs} args - Arguments to find a Usersdata
     * @example
     * // Get one Usersdata
     * const usersdata = await prisma.usersdata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersdataFindFirstArgs>(args?: Prisma.SelectSubset<T, usersdataFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersdataClient<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Usersdata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersdataFindFirstOrThrowArgs} args - Arguments to find a Usersdata
     * @example
     * // Get one Usersdata
     * const usersdata = await prisma.usersdata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersdataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersdataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersdataClient<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Usersdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersdataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usersdata
     * const usersdata = await prisma.usersdata.findMany()
     *
     * // Get first 10 Usersdata
     * const usersdata = await prisma.usersdata.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersdataWithIdOnly = await prisma.usersdata.findMany({ select: { id: true } })
     *
     */
    findMany<T extends usersdataFindManyArgs>(args?: Prisma.SelectSubset<T, usersdataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Usersdata.
     * @param {usersdataCreateArgs} args - Arguments to create a Usersdata.
     * @example
     * // Create one Usersdata
     * const Usersdata = await prisma.usersdata.create({
     *   data: {
     *     // ... data to create a Usersdata
     *   }
     * })
     *
     */
    create<T extends usersdataCreateArgs>(args: Prisma.SelectSubset<T, usersdataCreateArgs<ExtArgs>>): Prisma.Prisma__usersdataClient<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Usersdata.
     * @param {usersdataCreateManyArgs} args - Arguments to create many Usersdata.
     * @example
     * // Create many Usersdata
     * const usersdata = await prisma.usersdata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usersdataCreateManyArgs>(args?: Prisma.SelectSubset<T, usersdataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Usersdata and returns the data saved in the database.
     * @param {usersdataCreateManyAndReturnArgs} args - Arguments to create many Usersdata.
     * @example
     * // Create many Usersdata
     * const usersdata = await prisma.usersdata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Usersdata and only return the `id`
     * const usersdataWithIdOnly = await prisma.usersdata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends usersdataCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersdataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Usersdata.
     * @param {usersdataDeleteArgs} args - Arguments to delete one Usersdata.
     * @example
     * // Delete one Usersdata
     * const Usersdata = await prisma.usersdata.delete({
     *   where: {
     *     // ... filter to delete one Usersdata
     *   }
     * })
     *
     */
    delete<T extends usersdataDeleteArgs>(args: Prisma.SelectSubset<T, usersdataDeleteArgs<ExtArgs>>): Prisma.Prisma__usersdataClient<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Usersdata.
     * @param {usersdataUpdateArgs} args - Arguments to update one Usersdata.
     * @example
     * // Update one Usersdata
     * const usersdata = await prisma.usersdata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usersdataUpdateArgs>(args: Prisma.SelectSubset<T, usersdataUpdateArgs<ExtArgs>>): Prisma.Prisma__usersdataClient<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Usersdata.
     * @param {usersdataDeleteManyArgs} args - Arguments to filter Usersdata to delete.
     * @example
     * // Delete a few Usersdata
     * const { count } = await prisma.usersdata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usersdataDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersdataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Usersdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersdataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usersdata
     * const usersdata = await prisma.usersdata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usersdataUpdateManyArgs>(args: Prisma.SelectSubset<T, usersdataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Usersdata and returns the data updated in the database.
     * @param {usersdataUpdateManyAndReturnArgs} args - Arguments to update many Usersdata.
     * @example
     * // Update many Usersdata
     * const usersdata = await prisma.usersdata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Usersdata and only return the `id`
     * const usersdataWithIdOnly = await prisma.usersdata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends usersdataUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersdataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Usersdata.
     * @param {usersdataUpsertArgs} args - Arguments to update or create a Usersdata.
     * @example
     * // Update or create a Usersdata
     * const usersdata = await prisma.usersdata.upsert({
     *   create: {
     *     // ... data to create a Usersdata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usersdata we want to update
     *   }
     * })
     */
    upsert<T extends usersdataUpsertArgs>(args: Prisma.SelectSubset<T, usersdataUpsertArgs<ExtArgs>>): Prisma.Prisma__usersdataClient<runtime.Types.Result.GetResult<Prisma.$usersdataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Usersdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersdataCountArgs} args - Arguments to filter Usersdata to count.
     * @example
     * // Count the number of Usersdata
     * const count = await prisma.usersdata.count({
     *   where: {
     *     // ... the filter for the Usersdata we want to count
     *   }
     * })
    **/
    count<T extends usersdataCountArgs>(args?: Prisma.Subset<T, usersdataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersdataCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Usersdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersdataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersdataAggregateArgs>(args: Prisma.Subset<T, UsersdataAggregateArgs>): Prisma.PrismaPromise<GetUsersdataAggregateType<T>>;
    /**
     * Group by Usersdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersdataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends usersdataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersdataGroupByArgs['orderBy'];
    } : {
        orderBy?: usersdataGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersdataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersdataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the usersdata model
     */
    readonly fields: usersdataFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for usersdata.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__usersdataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the usersdata model
 */
export interface usersdataFieldRefs {
    readonly id: Prisma.FieldRef<"usersdata", 'String'>;
    readonly username: Prisma.FieldRef<"usersdata", 'String'>;
    readonly password: Prisma.FieldRef<"usersdata", 'String'>;
}
/**
 * usersdata findUnique
 */
export type usersdataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * Filter, which usersdata to fetch.
     */
    where: Prisma.usersdataWhereUniqueInput;
};
/**
 * usersdata findUniqueOrThrow
 */
export type usersdataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * Filter, which usersdata to fetch.
     */
    where: Prisma.usersdataWhereUniqueInput;
};
/**
 * usersdata findFirst
 */
export type usersdataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * Filter, which usersdata to fetch.
     */
    where?: Prisma.usersdataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usersdata to fetch.
     */
    orderBy?: Prisma.usersdataOrderByWithRelationInput | Prisma.usersdataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for usersdata.
     */
    cursor?: Prisma.usersdataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usersdata from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usersdata.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of usersdata.
     */
    distinct?: Prisma.UsersdataScalarFieldEnum | Prisma.UsersdataScalarFieldEnum[];
};
/**
 * usersdata findFirstOrThrow
 */
export type usersdataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * Filter, which usersdata to fetch.
     */
    where?: Prisma.usersdataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usersdata to fetch.
     */
    orderBy?: Prisma.usersdataOrderByWithRelationInput | Prisma.usersdataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for usersdata.
     */
    cursor?: Prisma.usersdataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usersdata from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usersdata.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of usersdata.
     */
    distinct?: Prisma.UsersdataScalarFieldEnum | Prisma.UsersdataScalarFieldEnum[];
};
/**
 * usersdata findMany
 */
export type usersdataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * Filter, which usersdata to fetch.
     */
    where?: Prisma.usersdataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usersdata to fetch.
     */
    orderBy?: Prisma.usersdataOrderByWithRelationInput | Prisma.usersdataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing usersdata.
     */
    cursor?: Prisma.usersdataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usersdata from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usersdata.
     */
    skip?: number;
    distinct?: Prisma.UsersdataScalarFieldEnum | Prisma.UsersdataScalarFieldEnum[];
};
/**
 * usersdata create
 */
export type usersdataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * The data needed to create a usersdata.
     */
    data: Prisma.XOR<Prisma.usersdataCreateInput, Prisma.usersdataUncheckedCreateInput>;
};
/**
 * usersdata createMany
 */
export type usersdataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many usersdata.
     */
    data: Prisma.usersdataCreateManyInput | Prisma.usersdataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * usersdata createManyAndReturn
 */
export type usersdataCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * The data used to create many usersdata.
     */
    data: Prisma.usersdataCreateManyInput | Prisma.usersdataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * usersdata update
 */
export type usersdataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * The data needed to update a usersdata.
     */
    data: Prisma.XOR<Prisma.usersdataUpdateInput, Prisma.usersdataUncheckedUpdateInput>;
    /**
     * Choose, which usersdata to update.
     */
    where: Prisma.usersdataWhereUniqueInput;
};
/**
 * usersdata updateMany
 */
export type usersdataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update usersdata.
     */
    data: Prisma.XOR<Prisma.usersdataUpdateManyMutationInput, Prisma.usersdataUncheckedUpdateManyInput>;
    /**
     * Filter which usersdata to update
     */
    where?: Prisma.usersdataWhereInput;
    /**
     * Limit how many usersdata to update.
     */
    limit?: number;
};
/**
 * usersdata updateManyAndReturn
 */
export type usersdataUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * The data used to update usersdata.
     */
    data: Prisma.XOR<Prisma.usersdataUpdateManyMutationInput, Prisma.usersdataUncheckedUpdateManyInput>;
    /**
     * Filter which usersdata to update
     */
    where?: Prisma.usersdataWhereInput;
    /**
     * Limit how many usersdata to update.
     */
    limit?: number;
};
/**
 * usersdata upsert
 */
export type usersdataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * The filter to search for the usersdata to update in case it exists.
     */
    where: Prisma.usersdataWhereUniqueInput;
    /**
     * In case the usersdata found by the `where` argument doesn't exist, create a new usersdata with this data.
     */
    create: Prisma.XOR<Prisma.usersdataCreateInput, Prisma.usersdataUncheckedCreateInput>;
    /**
     * In case the usersdata was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.usersdataUpdateInput, Prisma.usersdataUncheckedUpdateInput>;
};
/**
 * usersdata delete
 */
export type usersdataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
    /**
     * Filter which usersdata to delete.
     */
    where: Prisma.usersdataWhereUniqueInput;
};
/**
 * usersdata deleteMany
 */
export type usersdataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which usersdata to delete
     */
    where?: Prisma.usersdataWhereInput;
    /**
     * Limit how many usersdata to delete.
     */
    limit?: number;
};
/**
 * usersdata without action
 */
export type usersdataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersdata
     */
    select?: Prisma.usersdataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usersdata
     */
    omit?: Prisma.usersdataOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=usersdata.d.ts.map